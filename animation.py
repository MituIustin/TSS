from time import sleep
from selenium.webdriver.common.by import By
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/animation")

button = driver.find_element(By.ID, "animationButton")
moving = driver.find_element(By.ID, "movingTarget")
button.click()

last_x = moving.location['x']
last_y = moving.location['y']

while True:
    sleep(0.05)
    x = moving.location['x']
    y = moving.location['y']

    if last_x != x or last_y != y:
        print(f"Moving target is at {x}, {y}")
        last_x = x
        last_y = y
    else:
        break

moving.click()

status = driver.find_element(By.ID, "opstatus")
print(f"Status: {status.text}")
assert 'btn' in status.text
assert 'btn-primary' in status.text
assert 'spin' not in status.text

driver.quit()
