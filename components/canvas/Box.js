import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

function Box() {

    const meshBox = useRef(null)
    useFrame(() => {
        if (meshBox.current) {
        meshBox.current.rotation.x = meshBox.current.rotation.y += 0.005
        }
    })

  return (
    <mesh
        ref={meshBox}
        position={[0, 0, 0]}
    >
        {/* <pointLight /> */}
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial color='blue' />
    </mesh>
  );
}

export default Box;
