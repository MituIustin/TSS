from selenium.webdriver.common.by import By
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/textinput")

text = driver.find_element(By.ID, "newButtonName")
button = driver.find_element(By.ID, "updatingButton")

TEXT = "Hello World!"
text.send_keys(TEXT)
button.click()
assert button.text == TEXT
