from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

path = "C:\\Program Files (x86)\\chromedriver.exe"
service = Service(executable_path=path)

options = Options()
options.add_argument('--ignore-certificate-errors')

driver = webdriver.Chrome(service=service, options=options)
driver.get("http://uitestingplayground.com/click")

button = driver.find_element(By.ID, "badButton")

color_before = button.value_of_css_property("background-color")
print("Culoare inainte de click:", color_before)

time.sleep(2)
button.click()
time.sleep(2)

color_after = button.value_of_css_property("background-color")
print("Culoare dupa click:", color_after)

driver.quit()
