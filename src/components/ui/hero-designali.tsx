"use client";

import { cn } from "@/lib/utils";

// Removed @ts-expect-error as it's no longer needed
function N(this: any, e: any) {
  this.init(e || {});
}

N.prototype = {
  init: function (this: any, e: any) {
    this.phase = e.phase || 0;
    this.offset = e.offset || 0;
    this.frequency = e.frequency || 0.001;
    this.amplitude = e.amplitude || 1;
  },
  update: function (this: any) {
    this.phase += this.frequency;
    let currentVal = this.offset + Math.sin(this.phase) * this.amplitude;
    return currentVal;
  },
  value: function (this: any) {
    return this.offset + Math.sin(this.phase) * this.amplitude;
  },
};

interface Pos {
  x: number;
  y: number;
}

// Removed @ts-expect-error as it's no longer needed
function Line(this: any, e: any) {
  this.init(e || {});
}

Line.prototype = {
  init: function (this: any, e: any) {
    this.spring = e.spring + 0.1 * Math.random() - 0.05;
    this.friction = E.friction + 0.01 * Math.random() - 0.005;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) { 
      let t = new Node(); 
      t.x = pos.x; 
      t.y = pos.y;
      this.nodes.push(t);
    }
  },
  update: function (this: any) {
    let spring = this.spring;
    let node = this.nodes[0];
    node.vx += (pos.x - node.x) * spring;
    node.vy += (pos.y - node.y) * spring;
    for (let i = 0; i < this.nodes.length; i++) {
      node = this.nodes[i];
      if (i > 0) {
        let prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * spring;
        node.vy += (prevNode.y - node.y) * spring;
        node.vx += prevNode.vx * E.dampening;
        node.vy += prevNode.vy * E.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= E.tension;
    }
  },
  draw: function (this: any) {
    let currentX, currentY;
    let nodeX = this.nodes[0].x;
    let nodeY = this.nodes[0].y;
    ctx.beginPath();
    ctx.moveTo(nodeX, nodeY);
    for (let i = 1; i < this.nodes.length - 2; i++) {
      let p1 = this.nodes[i];
      let p2 = this.nodes[i + 1];
      currentX = (p1.x + p2.x) * 0.5;
      currentY = (p1.y + p2.y) * 0.5;
      ctx.quadraticCurveTo(p1.x, p1.y, currentX, currentY);
    }
    let p1 = this.nodes[this.nodes.length - 2];
    let p2 = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    ctx.stroke();
    ctx.closePath();
  },
};

// Removed @ts-expect-error as it's no longer needed for the event type itself
// but inner usage might still need `as any` for listener compatibility if types are complex
function onMousemove(event: MouseEvent | TouchEvent) {
  function o() {
    lines = [];
    for (let i = 0; i < E.trails; i++)
      lines.push(new (Line as any)({ spring: 0.45 + (i / E.trails) * 0.025 }));
  }
  function c(e: MouseEvent | TouchEvent) {
    if ('touches' in e) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    e.preventDefault();
  }
  function l(e: TouchEvent) {
    if (e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  }
  document.removeEventListener("mousemove", onMousemove as any);
  document.removeEventListener("touchstart", onMousemove as any);
  document.addEventListener("mousemove", c as any);
  document.addEventListener("touchmove", c as any);
  document.addEventListener("touchstart", l as any);
  c(event);
  o();
  render();
}

function render() {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = "hsla(" + Math.round(f.update()) + ",100%,50%,0.025)";
    ctx.lineWidth = 10;
    for (let i = 0; i < E.trails; i++) {
      let trail = lines[i];
      trail.update();
      trail.draw();
    }
    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas() {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

let ctx: any; // Needs proper typing for CanvasRenderingContext2D
let f: any; // Instance of N, needs proper typing
// let e = 0; // This `e` seems unused globally, and conflicts with `e` in N.prototype.update
let pos: Pos = { x: 0, y: 0 }; // Typed pos
let lines: any[] = []; // Array of Line instances, needs proper typing

const E = {
  debug: true,
  friction: 0.5,
  trails: 80,
  size: 50,
  dampening: 0.025,
  tension: 0.99,
};
class Node {
  x: number;
  y: number;
  vy: number;
  vx: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }
}

const renderCanvas = function () {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
  if (canvas) {
    ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.running = true;
      ctx.frame = 1;
      f = new (N as any)({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
      });
      document.addEventListener("mousemove", onMousemove as any);
      document.addEventListener("touchstart", onMousemove as any);
      document.body.addEventListener("orientationchange", resizeCanvas);
      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("focus", () => {
        if (!ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.addEventListener("blur", () => {
        ctx.running = true; // Consider if this should be false or handled differently
      });
      resizeCanvas();
    } else {
      console.error("Failed to get 2D context from canvas");
    }
  } else {
    console.error("Canvas element not found");
  }
};

import { ReactTyped } from "react-typed";

interface TypeWriterProps {
  strings: string[];
}


const TypeWriter = ({ strings }: TypeWriterProps) => {
  return (
    <ReactTyped
      loop
      typeSpeed={80}
      backSpeed={20}
      strings={strings}
      smartBackspace
      backDelay={1000}
      loopCount={0}
      showCursor
      cursorChar="|"
    />
  );
};

type TColorProp = string | string[];

interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  color?: TColorProp;
  className?: string;
  children: React.ReactNode;
}

/**
 * @name Shine Border
 * @description It is an animated background border effect component with easy to use and configurable props.
 * @param borderRadius defines the radius of the border.
 * @param borderWidth defines the width of the border.
 * @param duration defines the animation duration to be applied on the shining border
 * @param color a string or string array to define border color.
 * @param className defines the class name to be applied to the component
 * @param children contains react node elements.
 */
function ShineBorder({
  borderRadius = 8,
  borderWidth = 1,
  duration = 14,
  color = "#000000",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn(
        "relative grid h-full w-full place-items-center rounded-3xl bg-white p-3 text-black dark:bg-black dark:text-white",
        className,
      )}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--shine-pulse-duration": `${duration}s`,
            "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${color instanceof Array ? color.join(",") : color},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`before:bg-shine-size before:absolute before:inset-0 before:aspect-square before:size-full before:rounded-3xl before:p-[--border-width] before:will-change-[background-position] before:content-[""] before:![-webkit-mask-composite:xor] before:[background-image:--background-radial-gradient] before:[background-size:300%_300%] before:![mask-composite:exclude] before:[mask:--mask-linear-gradient] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      {children}
    </div>
  );
}



export { renderCanvas, TypeWriter, ShineBorder }