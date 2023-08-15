import React, { useState } from 'react';
import { ICircle, ILine, IRectangle } from 'models/models';
import { Stage, Layer } from 'react-konva';
import { Rectangle, Circle, Line } from 'components';
import { KonvaEventObject } from 'konva/lib/Node';

export const Canvas = () => {
  const [rectangles, setRectangles] = useState<IRectangle[]>([]);
  const [circles, setCircles] = useState<ICircle[]>([]);
  const [lines, setLines] = useState<ILine[]>([]);
  const [selectedId, selectShape] = useState<any>(null);
  const [color, setColor] = useState<string>('green');

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  const addCircle = () => {
    const newCircle = {
      x: getRandomInt(100),
      y: getRandomInt(100),
      radius: 50,
      fill: color,
      id: `circ${circles.length + 1}`
    };

    const updatedCircles = [...circles, newCircle];
    setCircles(updatedCircles);
  };

  const addRectangle = () => {
    const initialRectangles = {
      x: 10,
      y: 10,
      width: 100,
      height: 100,
      fill: color,
      id: `rect${rectangles.length + 1}`
    };

    const updatedRectangles = [...rectangles, initialRectangles];
    setRectangles(updatedRectangles);
  };

  const addLine = () => {
    const newLine: ILine = {
      points: [10, 100, 100, 100],
      stroke: color,
      strokeWidth: 2,
      x: 10,
      y: 10,
      id: `line${lines.length + 1}`
    };

    const updatedLines = [...lines, newLine];
    setLines(updatedLines);
  };

  const checkDeselect = (
    e: KonvaEventObject<MouseEvent> | KonvaEventObject<TouchEvent>
  ) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <>
      <button type="button" onClick={addCircle}>
        Circle
      </button>
      <button type="button" onClick={addRectangle}>
        Rectangles
      </button>
      <button type="button" onClick={addLine}>
        Lines
      </button>

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          {rectangles.map((rect, i) => {
            return (
              <Rectangle
                key={rect.id}
                shapeProps={rect}
                isSelected={rect.id === selectedId}
                onSelect={() => {
                  selectShape(rect.id);
                }}
                onChange={(newAttrs: IRectangle) => {
                  const rects = rectangles.slice();
                  rects[i] = newAttrs;
                  setRectangles(rects);
                }}
              />
            );
          })}

          {circles.map((circ, i) => {
            return (
              <Circle
                key={circ.id}
                shapeProps={circ}
                isSelected={circ.id === selectedId}
                onSelect={() => {
                  selectShape(circ.id);
                }}
                onChange={(newAttrs: ICircle) => {
                  const circ = circles.slice();
                  circ[i] = newAttrs;
                  setCircles(circ);
                }}
              />
            );
          })}

          {lines.map((line, i) => (
            <Line
              key={line.id}
              shapeProps={line}
              isSelected={line.id === selectedId}
              onSelect={() => {
                selectShape(line.id);
              }}
              onChange={(newAttrs: ILine) => {
                const line = lines.slice();
                line[i] = newAttrs;
                setLines(line);
              }}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
};
