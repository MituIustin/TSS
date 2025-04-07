from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

path = "C:\\Program Files (x86)\\chromedriver.exe"
service = Service(executable_path=path)

options = Options()
options.add_argument('--ignore-certificate-errors')

driver = webdriver.Chrome(service=service, options=options)
driver.get("http://uitestingplayground.com")