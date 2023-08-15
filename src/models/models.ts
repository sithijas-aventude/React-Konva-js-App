export interface ICircle {
  x: number;
  y: number;
  radius: number;
  fill: string;
  id: string;
}

export interface IRectangle {
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  id: string;
}

export interface ILine {
  points: number[];
  stroke: string;
  strokeWidth: number;
  x: number;
  y: number;
  scaleX?: number;
  scaleY?: number;
  id: string;
}
