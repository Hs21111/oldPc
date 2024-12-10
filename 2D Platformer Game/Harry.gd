extends KinematicBody2D

var velocity = Vector2(0,0)
const SPEED = 216
const JUMP = -750
const GRAVITY = 35


func _physics_process(delta):
	
	if Input.is_action_pressed("ui_right"):
		velocity.x = SPEED
		$Sprite.play("walk")
		$Sprite.flip_h = false
	elif Input.is_action_pressed("ui_left"):
		velocity.x = -SPEED
		$Sprite.play("walk")
		$Sprite.flip_h = true
	elif is_on_floor():
		$Sprite.play("idle")

	if velocity.y < (JUMP-1) or velocity.y > 200 and not is_on_floor():
		$Sprite.play("air")
		
	velocity.y = velocity.y + GRAVITY
	
	if Input.is_action_pressed("ui_up"):
		velocity.y = JUMP
		
	velocity = move_and_slide(velocity,Vector2.UP)
	
	velocity.x = lerp(velocity.x,0,0.2)
	
	print(velocity)
	
	
	
	
