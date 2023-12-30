/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 ./public/bedroom.glb 
*/

import React, { useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
import * as THREE from "three";

export function Room(props) {
  const { nodes, materials } = useGLTF("/bedroom.glb");
  const [hover, setHover] = useState();
  const [click, setClick] = useState({
    chair: false,
    bed: false,
    table: false,
  });
  const [obj, setObj] = useState({
    all: false,
    chair: false,
    bed: false,
    table: false,
  });

  const handleBedClick = () => {
    setClick((prevClick) => ({ ...prevClick, bed: !prevClick.bed }));
    props.onBedClick(!click.bed); // Pass the value to the parent component
  };

  return (
    <group
      onPointerOver={(e) => setHover(e.object.parent.name)}
      onPointerOut={(e) => setHover(null)}
      {...props}
      dispose={null}
    >
      <Select enabled={obj.all}>
        <mesh
          geometry={nodes.Floor.geometry}
          material={materials.White}
          scale={[4, 0.2, 4]}
        />
        <Select
          name="bed"
          enabled={hover === "bed" || obj.bed || click.bed}
          onPointerOver={() => setHover("bed")}
          onPointerOut={() => setHover(null)}
          onClick={handleBedClick}
        >
          <mesh
            geometry={nodes.Bed_frame.geometry}
            material={materials.Frame}
            position={[-2.66, 0.203, 2.206]}
          />
          <group position={[-2.66, 0.875, 2.206]}>
            <mesh
              geometry={nodes.Cube011.geometry}
              material={materials.White}
            />
            <mesh
              geometry={nodes.Cube011_1.geometry}
              material={materials.Pillow}
            />
            <mesh
              geometry={nodes.Cube011_2.geometry}
              material={materials.Blanket}
            />
          </group>
          <group position={[-2.66, 1.337, 3.599]}>
            <mesh
              geometry={nodes.Cube012.geometry}
              material={materials.Blanket}
            />
            <mesh
              geometry={nodes.Cube012_1.geometry}
              material={materials.Pillow}
            />
            {click.bed && (
              <Html distanceFactor={10}>
                <div className="content">Bed</div>
              </Html>
            )}
          </group>
        </Select>

        <group position={[-0.007, 0.204, 3.486]}>
          <mesh geometry={nodes.Cube008.geometry} material={materials.Frame} />
          <mesh
            geometry={nodes.Cube008_1.geometry}
            material={materials.Blanket}
          />
          <mesh
            geometry={nodes.Cube008_2.geometry}
            material={materials["Pin picture.001"]}
          />
        </group>
        <mesh
          geometry={nodes.Pillow001.geometry}
          material={materials.Pillow}
          position={[0.153, 1.239, 3.649]}
        />
        <mesh
          geometry={nodes.Pillow002.geometry}
          material={materials.Pillow}
          position={[0.59, 1.285, 3.771]}
          rotation={[-1.18, 0.143, 0.13]}
        />
        <group position={[2.63, 0.204, 3.657]}>
          <mesh geometry={nodes.Cube016.geometry} material={materials.Frame} />
          <mesh
            geometry={nodes.Cube016_1.geometry}
            material={materials["Pin picture.001"]}
          />
        </group>
        <group position={[-3.23, 0.198, -1.541]}>
          <mesh geometry={nodes.Cube017.geometry} material={materials.Frame} />
          <mesh
            geometry={nodes.Cube017_1.geometry}
            material={materials["Pin picture.001"]}
          />
        </group>
        <group position={[3.378, 1.88, 3.675]}>
          <mesh geometry={nodes.Cube020.geometry} material={materials.White} />
          <mesh geometry={nodes.Cube020_1.geometry} material={materials.Red} />
          <mesh geometry={nodes.Cube020_2.geometry} material={materials.Blue} />
          <mesh
            geometry={nodes.Cube020_3.geometry}
            material={materials.Yellow}
          />
        </group>
        <group position={[2.587, 2.612, 3.682]}>
          <mesh geometry={nodes.Cube022.geometry} material={materials.White} />
          <mesh
            geometry={nodes.Cube022_1.geometry}
            material={materials.Yellow}
          />
          <mesh geometry={nodes.Cube022_2.geometry} material={materials.Red} />
          <mesh geometry={nodes.Cube022_3.geometry} material={materials.Blue} />
        </group>
        <Select
          name="table"
          enabled={hover === "table" || obj.table}
          onPointerOver={() => setHover("table")}
          onPointerOut={() => setHover(null)}
          onClick={() =>
            setClick((prevClick) => ({ ...prevClick, table: !prevClick.table }))
          }
        >
          <mesh
            geometry={nodes.Coffe_table.geometry}
            material={materials.Frame}
            position={[1.197, 0.554, -0.881]}
          />
          <group name="cup1" position={[1.687, 0.667, -0.803]}>
            <mesh
              geometry={nodes.Cylinder005.geometry}
              material={materials.White}
            />
            <mesh
              geometry={nodes.Cylinder005_1.geometry}
              material={materials.Coffe}
            />
          </group>
          <group name="cup2" position={[1.306, 0.684, -1.454]}>
            <mesh
              geometry={nodes.Cylinder006.geometry}
              material={materials.White}
            />
            <mesh
              geometry={nodes.Cylinder006_1.geometry}
              material={materials.Coffe}
            />
            {click.table && (
              <Html distanceFactor={10}>
                <div className="content">Table</div>
              </Html>
            )}
          </group>
        </Select>
        <group position={[1.186, 0.208, -0.871]} rotation={[0, 0.455, 0]}>
          <mesh geometry={nodes.Plane.geometry} material={materials.Pillow} />
          <mesh geometry={nodes.Plane_1.geometry} material={materials.White} />
        </group>
        <mesh
          geometry={nodes.Cushion.geometry}
          material={materials.Blanket}
          position={[2.772, 0.282, -0.848]}
          rotation={[0, 0.349, 0]}
        />
        <group position={[3.394, 1.271, 3.672]}>
          <mesh geometry={nodes.Cube028.geometry} material={materials.White} />
          <mesh geometry={nodes.Cube028_1.geometry} material={materials.Red} />
          <mesh geometry={nodes.Cube028_2.geometry} material={materials.Blue} />
          <mesh
            geometry={nodes.Cube028_3.geometry}
            material={materials.Yellow}
          />
        </group>
        <mesh
          geometry={nodes.Cushion001.geometry}
          material={materials.Blanket}
          position={[1.416, 0.282, -2.391]}
          rotation={[-Math.PI, 1.403, -Math.PI]}
        />
        <group position={[-3.568, 0.174, -3.313]}>
          <mesh
            geometry={nodes.Cube035.geometry}
            material={materials.Blanket}
          />
          <mesh
            geometry={nodes.Cube035_1.geometry}
            material={materials.Pillow}
          />
        </group>
        <group position={[2.496, 1.877, 3.672]}>
          <mesh geometry={nodes.Cube040.geometry} material={materials.White} />
          <mesh geometry={nodes.Cube040_1.geometry} material={materials.Blue} />
          <mesh geometry={nodes.Cube040_2.geometry} material={materials.Red} />
          <mesh
            geometry={nodes.Cube040_3.geometry}
            material={materials.Yellow}
          />
        </group>
        <Select
          name="chair"
          enabled={hover === "chair" || obj.chair}
          onPointerOver={() => setHover("chair")}
          onPointerOut={() => setHover(null)}
        >
          <group position={[-1.738, 1.057, -1.254]}>
            <mesh
              geometry={nodes.Cube052.geometry}
              material={materials.Blanket}
            />
            <mesh
              geometry={nodes.Cube052_1.geometry}
              material={materials.Frame}
            />
            {(hover === "chair" || obj.chair) && (
              <Html distanceFactor={10}>
                <div className="content">Chair</div>
              </Html>
            )}
          </group>
        </Select>

        <group position={[2.568, 1.491, 3.646]} rotation={[0, 0.315, 0]}>
          <mesh geometry={nodes.Cube015.geometry} material={materials.Frame} />
          <mesh
            geometry={nodes.Cube015_1.geometry}
            material={materials.White}
          />
          <mesh
            geometry={nodes.Cube015_2.geometry}
            material={materials["Pin picture.002"]}
          />
        </group>
        <group position={[1.911, 1.491, 3.646]} rotation={[0, -0.354, 0]}>
          <mesh geometry={nodes.Cube019.geometry} material={materials.Frame} />
          <mesh
            geometry={nodes.Cube019_1.geometry}
            material={materials.White}
          />
          <mesh
            geometry={nodes.Cube019_2.geometry}
            material={materials["Pin picture"]}
          />
        </group>
        <group position={[-3.654, 1.444, -1.056]}>
          <mesh geometry={nodes.Cube021.geometry} material={materials.Pillow} />
          <mesh
            geometry={nodes.Cube021_1.geometry}
            material={materials["Pin picture.001"]}
          />
        </group>
        <group position={[-2.953, 1.441, -1.105]}>
          <mesh geometry={nodes.Cube023.geometry} material={materials.Pillow} />
          <mesh
            geometry={nodes.Cube023_1.geometry}
            material={materials["Pin picture.001"]}
          />
        </group>
        <group position={[-3.659, 1.445, -2.442]}>
          <mesh geometry={nodes.Cylinder.geometry} material={materials.Coffe} />
          <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Blanket}
          />
          <mesh
            geometry={nodes.Cylinder_2.geometry}
            material={materials.Leaves}
          />
          <mesh
            geometry={nodes.Cylinder_3.geometry}
            material={materials.Frame}
          />
        </group>
        <mesh geometry={nodes.Wall.geometry} material={materials.White} />
        <Select name="window" enabled={hover === "window" || obj.window}>
          <group position={[0.038, 2.932, 4.276]}>
            <mesh
              geometry={nodes.Cube004.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Cube004_1.geometry}
              material={materials.Material}
            />
          </group>
        </Select>
        <Select name="board" enabled={hover === "board" || obj.board}>
          <group position={[-4.004, 3.051, -1.324]}>
            <mesh
              geometry={nodes.Cube050.geometry}
              material={materials.White}
            />
            <mesh
              geometry={nodes.Cube050_1.geometry}
              material={materials["Pin picture"]}
            />
            <mesh
              geometry={nodes.Cube050_2.geometry}
              material={materials.Frame}
            />
            <mesh
              geometry={nodes.Cube050_3.geometry}
              material={materials.Board}
            />
            <mesh
              geometry={nodes.Cube050_4.geometry}
              material={materials.Red}
            />
            <mesh
              geometry={nodes.Cube050_5.geometry}
              material={materials["Pin picture.001"]}
            />
            <mesh
              geometry={nodes.Cube050_6.geometry}
              material={materials.Yellow}
            />
            <mesh
              geometry={nodes.Cube050_7.geometry}
              material={materials["Pin picture.002"]}
            />
            <mesh
              geometry={nodes.Cube050_8.geometry}
              material={materials.Blue}
            />
          </group>
        </Select>
        <mesh
          geometry={nodes.Wallshelf.geometry}
          material={materials.Frame}
          position={[-3.77, 3.25, 2.269]}
        />
        <group position={[-3.717, 3.193, 2.867]}>
          <mesh
            geometry={nodes.Cylinder001.geometry}
            material={materials.Red}
          />
          <mesh
            geometry={nodes.Cylinder001_1.geometry}
            material={materials.Leaves}
          />
        </group>
        <group position={[-3.74, 2.79, 1.657]}>
          <mesh
            geometry={nodes.Cylinder002.geometry}
            material={materials.Blue}
          />
          <mesh
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.Leaves}
          />
        </group>
      </Select>
    </group>
  );
}

useGLTF.preload("/bedroom.glb");
