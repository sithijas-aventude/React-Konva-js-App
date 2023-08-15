import React, { useRef } from 'react';
import { ICircle } from 'models/models';
import { Circle as KonvaCircle, Transformer } from 'react-konva';

interface IProps {
  shapeProps: ICircle;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: ICircle) => void;
}

export const Circle = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange
}: IProps) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <KonvaCircle
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y()
          });
        }}
        onTransformEnd={() => {
          const node = shapeRef.current;
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y()
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
