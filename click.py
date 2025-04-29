import time
from selenium.webdriver.common.by import By
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/click")

button = driver.find_element(By.ID, "badButton")

color_before = button.value_of_css_property("background-color")
print("Culoare inainte de click:", color_before)

button.click()
time.sleep(1)

color_after = button.value_of_css_property("background-color")
print("Culoare dupa click:", color_after)

driver.quit()
