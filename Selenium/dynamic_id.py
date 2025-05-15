from selenium.webdriver.common.by import By
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/dynamicid")

button = driver.find_element(By.XPATH, "//button[text()='Button with Dynamic ID']")
print(f"ID: {button.get_attribute('id')}")

driver.quit()
