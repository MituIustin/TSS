from selenium.webdriver.common.by import By
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/mouseover")

# Elementele isi schimba culoarea la hover prin inlocuire cu alt element, deci trebuie apelat find_element de fiecare data

for _ in range(10):
    driver.find_element(By.XPATH, "//a[text()='Click me']").click()

for _ in range(7):
    driver.find_element(By.XPATH, "//a[text()='Link Button']").click()

assert driver.find_element(By.ID, "clickCount").text == "10"
assert driver.find_element(By.ID, "clickButtonCount").text == "7"
