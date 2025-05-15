from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/progressbar")

start = driver.find_element(By.ID, "startButton")
stop = driver.find_element(By.ID, "stopButton")
bar = driver.find_element(By.ID, "progressBar")

start.click()

wait = WebDriverWait(driver, 60)
wait.until(lambda _: int(bar.get_attribute("aria-valuenow")) >= 75)
stop.click()

result = driver.find_element(By.ID, "result")
print(result.text)
