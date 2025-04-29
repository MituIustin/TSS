from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/ajax")

button = driver.find_element(By.ID, "ajaxButton")
button.click()

wait = WebDriverWait(driver, 30)
data = wait.until(lambda d: d.find_elements(By.XPATH, "//div[@id='content']/p[@class='bg-success']"))
assert data[0].text == "Data loaded with AJAX get request."
