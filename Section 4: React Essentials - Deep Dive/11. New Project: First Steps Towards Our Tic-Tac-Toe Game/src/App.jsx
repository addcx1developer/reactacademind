function App() {
	return (
		<main>
			<div id='game-container'>
				<ol id='players'>
					<li>
						<span className='player-name'>Player 1</span>
						<div className='player-symbol'>X</div>
					</li>
					<li>
						<span className='player-name'>Player 2</span>
						<div className='player-symbol'>O</div>
					</li>
				</ol>
				GAME BOARD
			</div>
			LOG
		</main>
	);
}

export default App;
