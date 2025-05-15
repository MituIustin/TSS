from selenium.webdriver.common.by import By
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/dynamictable")

chrome_value = driver.find_element(By.XPATH, "//span[text()='Chrome']/../span[contains(text(), '%')]").text
chrome_value_2 = driver.find_element(By.XPATH, "//p[contains(text(), 'Chrome CPU:')]").text
assert chrome_value == chrome_value_2.split(": ")[1], f"{chrome_value} disagrees with {chrome_value_2}"
