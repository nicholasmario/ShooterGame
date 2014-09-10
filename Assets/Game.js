#pragma strict

private var remainingEnemy: int;
private var score: int = 0;
private var level: int = 0;
private var currentEnemy: int;
public var increaseRate: int = 1;
public var initSpawnRate: float = 3.0f;
public var spawnRateIncRate: float = 0.5f;

function EnemyHit() {
	remainingEnemy--;
	score += 100 * level;
	if (remainingEnemy <= 0) {
		level++;
		currentEnemy = currentEnemy + increaseRate;
		remainingEnemy = currentEnemy;

		if (initSpawnRate > 0.5) {
			initSpawnRate -= spawnRateIncRate;
		}
 	}
}
