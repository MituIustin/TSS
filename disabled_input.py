from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/disabledinput")

driver.find_element(By.ID, "enableButton").click()

field = driver.find_element(By.ID, "inputField")

wait = WebDriverWait(driver, 30)
wait.until(lambda _: field.is_enabled())

field.send_keys("Hello World!")

driver.quit()
