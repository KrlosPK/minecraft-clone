import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import { Ground } from './components/Ground';
import { FPV as Fpv } from './components/FPV';
import { Player } from './components/Player';
import { Cubes } from './components/Cubes';
import { TextureSelector } from './components/TextureSelector';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
	return (
		<>
			<Canvas>
				<Sky sunPosition={[100, 0, 1]} />
				<ambientLight intensity={0.5} />
				<Fpv />
				<Physics>
					<Cubes />
					<Player />
					<Ground />
				</Physics>
			</Canvas>
			<div className='pointer'>+</div>
			<TextureSelector />
		</>
	);
}

export { App };
