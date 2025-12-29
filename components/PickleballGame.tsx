import React, { useRef, useEffect, useState } from 'react';
import { Play, RotateCcw, Trophy } from 'lucide-react';
import { Button } from './ui/Button';

export const PickleballGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement | null>(null); // Ref for the logo image
  
  const [gameState, setGameState] = useState<'START' | 'PLAYING' | 'GAMEOVER'>('START');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [canvasDims, setCanvasDims] = useState({ width: 320, height: 450 });

  // Game Constants (adjustable based on scale if needed, keeping simple for now)
  const PADDLE_WIDTH = 80;
  const PADDLE_HEIGHT = 15;
  const BALL_RADIUS = 8;
  const KITCHEN_LINE_Y = 150; // Distance from net (top)

  // Refs for game loop
  const ballRef = useRef({ x: 0, y: 0, dx: 4, dy: -4, speed: 4 });
  const paddleRef = useRef({ x: 0 });
  const reqRef = useRef<number>(0);

  // Load Logo Image once
  useEffect(() => {
    const img = new Image();
    img.src = "https://i.imgur.com/cxjGH3m.png";
    logoRef.current = img;
  }, []);

  // Responsive Canvas Sizing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const maxWidth = Math.min(320, window.innerWidth - 40); // 40px for padding
        setCanvasDims({ width: maxWidth, height: 450 });
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initGame = () => {
    ballRef.current = { 
        x: canvasDims.width / 2, 
        y: canvasDims.height / 3, 
        dx: 3 * (Math.random() > 0.5 ? 1 : -1), 
        dy: -3, 
        speed: 4 
    };
    paddleRef.current = { x: (canvasDims.width - PADDLE_WIDTH) / 2 };
    setScore(0);
    setGameState('PLAYING');
  };

  const update = () => {
    if (gameState !== 'PLAYING') return;

    const ball = ballRef.current;
    const paddle = paddleRef.current;

    // Move Ball
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Wall Collisions (Left/Right)
    if (ball.x + BALL_RADIUS > canvasDims.width || ball.x - BALL_RADIUS < 0) {
      ball.dx = -ball.dx;
    }

    // Ceiling Collision (Net/Opponent Wall)
    if (ball.y - BALL_RADIUS < 0) {
      ball.dy = -ball.dy;
    }

    // Paddle Collision
    if (
      ball.y + BALL_RADIUS > canvasDims.height - 30 && 
      ball.y - BALL_RADIUS < canvasDims.height - 30 + PADDLE_HEIGHT
    ) {
      if (ball.x > paddle.x && ball.x < paddle.x + PADDLE_WIDTH) {
        ball.dy = -ball.speed; 
        
        // Calculate hit position relative to center of paddle
        const hitPoint = ball.x - (paddle.x + PADDLE_WIDTH / 2);
        
        // Add Randomness to the Angle (Spin/Surface effect)
        const randomAngle = (Math.random() * 3) - 1.5;
        ball.dx = (hitPoint * 0.15) + randomAngle;

        // Add Randomness to Speed increment
        const speedIncrement = 0.1 + (Math.random() * 0.3);
        ball.speed += speedIncrement;
        
        setScore(prev => prev + 1);
      }
    }

    // Floor Collision (Game Over)
    if (ball.y - BALL_RADIUS > canvasDims.height) {
      setGameState('GAMEOVER');
      cancelAnimationFrame(reqRef.current);
      setHighScore(prev => Math.max(prev, score)); 
      return;
    }

    reqRef.current = requestAnimationFrame(draw);
  };

  const draw = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    update();

    if (gameState !== 'PLAYING' && gameState !== 'START') {
        return; 
    }

    // Clear
    ctx.clearRect(0, 0, canvasDims.width, canvasDims.height);

    // --- DRAW COURT BACKGROUND ---
    
    // Main Court Color (Blue Hard Court)
    ctx.fillStyle = '#1e3a8a'; // Dark Blue
    ctx.fillRect(0, 0, canvasDims.width, canvasDims.height);
    
    // Kitchen Area Color (Slightly lighter or different shade)
    ctx.fillStyle = '#172554'; // Darker Blue for Kitchen
    ctx.fillRect(0, 0, canvasDims.width, KITCHEN_LINE_Y);

    // --- DRAW LOGO (Watermark) ---
    if (logoRef.current && logoRef.current.complete) {
        ctx.save();
        ctx.globalAlpha = 0.15; // Low opacity
        const logoSize = 180;
        const logoX = (canvasDims.width - logoSize) / 2;
        // Position roughly in the middle of the backcourt
        const logoY = KITCHEN_LINE_Y + (canvasDims.height - KITCHEN_LINE_Y - logoSize) / 2;
        
        ctx.drawImage(logoRef.current, logoX, logoY, logoSize, logoSize);
        ctx.restore();
    }

    // --- DRAW LINES ---
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 4;
    ctx.lineCap = 'butt';

    // Kitchen Line (Horizontal)
    ctx.beginPath();
    ctx.moveTo(0, KITCHEN_LINE_Y);
    ctx.lineTo(canvasDims.width, KITCHEN_LINE_Y);
    ctx.stroke();

    // Center Line (Vertical - from Kitchen to Baseline)
    ctx.beginPath();
    ctx.moveTo(canvasDims.width / 2, KITCHEN_LINE_Y);
    ctx.lineTo(canvasDims.width / 2, canvasDims.height);
    ctx.stroke();

    // Net (Top Bar)
    ctx.fillStyle = '#f8fafc'; // White Tape
    ctx.fillRect(0, 0, canvasDims.width, 12);
    // Net Mesh Effect
    ctx.fillStyle = '#334155';
    ctx.fillRect(0, 4, canvasDims.width, 4);


    // --- DRAW GAME ELEMENTS ---

    // Draw Paddle
    ctx.fillStyle = '#CCFF00'; 
    ctx.shadowBlur = 15;
    ctx.shadowColor = 'rgba(204, 255, 0, 0.5)';
    ctx.beginPath();
    ctx.roundRect(paddleRef.current.x, canvasDims.height - 30, PADDLE_WIDTH, PADDLE_HEIGHT, 6);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Draw Ball
    ctx.fillStyle = '#FFFF00'; // Optic Yellow
    ctx.beginPath();
    ctx.arc(ballRef.current.x, ballRef.current.y, BALL_RADIUS, 0, Math.PI * 2);
    ctx.fill();
    // Ball Highlight (3D effect)
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.beginPath();
    ctx.arc(ballRef.current.x - 2, ballRef.current.y - 2, 2, 0, Math.PI * 2);
    ctx.fill();

  };

  useEffect(() => {
    if (gameState === 'PLAYING') {
      reqRef.current = requestAnimationFrame(draw);
    }
    return () => cancelAnimationFrame(reqRef.current);
  }, [gameState, score, canvasDims]); 

  // Input Handling
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    
    let newX = mouseX - PADDLE_WIDTH / 2;
    if (newX < 0) newX = 0;
    if (newX + PADDLE_WIDTH > canvasDims.width) newX = canvasDims.width - PADDLE_WIDTH;
    
    paddleRef.current.x = newX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;

    let newX = touchX - PADDLE_WIDTH / 2;
    if (newX < 0) newX = 0;
    if (newX + PADDLE_WIDTH > canvasDims.width) newX = canvasDims.width - PADDLE_WIDTH;
    
    paddleRef.current.x = newX;
  };


  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      <div className="flex justify-between w-full mb-4 text-white" style={{ maxWidth: canvasDims.width }}>
        <div className="bg-brand-gray px-4 py-2 rounded-lg border border-white/10">
            <span className="text-xs text-gray-400 uppercase block">Score</span>
            <span className="text-2xl font-black text-pickle">{score}</span>
        </div>
        <div className="bg-brand-gray px-4 py-2 rounded-lg border border-white/10 text-right">
            <span className="text-xs text-gray-400 uppercase block">Best</span>
            <span className="text-2xl font-black text-white">{Math.max(score, highScore)}</span>
        </div>
      </div>

      <div 
        className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-brand-gray bg-black"
        style={{ width: canvasDims.width, height: canvasDims.height }}
      >
        <canvas
            ref={canvasRef}
            width={canvasDims.width}
            height={canvasDims.height}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="touch-none cursor-none"
            style={{ touchAction: 'none' }}
        />

        {gameState === 'START' && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
                <Trophy className="text-pickle w-16 h-16 mb-4 animate-bounce" />
                <h3 className="text-white font-black text-2xl uppercase italic mb-2">Pickleball Drill</h3>
                <p className="text-gray-300 text-sm mb-6">Mova a raquete para rebater a bola.</p>
                <Button onClick={initGame} className="animate-pulse shadow-[0_0_20px_#CCFF00]">
                    <Play size={20} /> Começar Jogo
                </Button>
            </div>
        )}

        {gameState === 'GAMEOVER' && (
            <div className="absolute inset-0 bg-red-900/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-white font-black text-3xl uppercase italic mb-2">Game Over!</h3>
                <p className="text-white text-lg mb-6">Pontuação Final: <span className="text-pickle font-bold">{score}</span></p>
                <Button onClick={initGame} variant="secondary">
                    <RotateCcw size={20} /> Tentar Novamente
                </Button>
            </div>
        )}
      </div>
      
      <p className="text-gray-500 text-xs mt-4">Arraste para mover a raquete.</p>
    </div>
  );
};