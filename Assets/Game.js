#pragma strict

private var remainingEnemy: int;
private var score: int = 0;
private var level: int = 0;

function EnemyHit() {
	remainingEnemy--;
	score += 100 * level;
	if (remainingEnemy <= 0) {

 	}
}
