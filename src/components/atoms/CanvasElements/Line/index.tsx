import { useEffect, useRef } from 'react';
import { ILine } from 'models/models';
import { Line as KonvaLine, Transformer } from 'react-konva';

interface IProps {
  shapeProps: ILine;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: ILine) => void;
}

export const Line = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange
}: IProps) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <KonvaLine
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        points={shapeProps.points}
        stroke={shapeProps.stroke}
        strokeWidth={shapeProps.strokeWidth}
        draggable
        onDragEnd={(e) => {
          const node = shapeRef.current;
          const newPosition = node.position();
          onChange({
            ...shapeProps,
            x: newPosition.x,
            y: newPosition.y
          });
        }}
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            points: node.points()
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};
