#pragma strict

private var remainingEnemy: int;
private var score: int = 0;
private var level: int = 0;
public var initMoveSpeed: float = 0.5f;
public var moveSpeedIncRate: float = 0.5f;
public var initShootRate: float = 3.0f;
public var shootRateIncRate: float = 0.5f;

function EnemyHit() {
	remainingEnemy--;
	score += 100 * level;
	if (remainingEnemy <= 0) {
		if (initMoveSpeed < 8) {
			initMoveSpeed += moveSpeedIncRate;
		}		
		if (initShootRate > 0.5) {
			initShootRate -= shootRateIncRate;
		}
 	}
}

