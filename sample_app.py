from selenium.webdriver.common.by import By
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/sampleapp")

name = driver.find_element(By.CSS_SELECTOR, "input[name='UserName']")
password = driver.find_element(By.CSS_SELECTOR, "input[name='Password']")
login = driver.find_element(By.XPATH, "//button[text()='Log In']")
status = driver.find_element(By.ID, "loginstatus")

name.send_keys("admin")
password.send_keys("pwd")
login.click()

assert status.text == "Welcome, admin!"
print("Autentificare reusita")

login.click()

assert status.text == "User logged out."
print("Deconectare reusita")

name.send_keys("admin")
password.send_keys("pwd!")
login.click()

assert status.text == "Invalid username/password"
print("Autentificare cu parola gresita esuata")

password.send_keys("pwd")
login.click()

assert status.text == "Invalid username/password"
print("Autentificare fara username esuata")
