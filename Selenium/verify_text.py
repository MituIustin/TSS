from selenium.webdriver.common.by import By
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/verifytext")

# Textul pare sa contina un singur spatiu, dar in HTML sunt multiple
badQuery = driver.find_elements(By.XPATH, "//span[. = 'Welcome UserName!']")

# 'text()' se refera doar la textul direct al elementului, dar 'UserName' este intr-un sub-span
badQuery2 = driver.find_elements(By.XPATH, "//span[normalize-space(text()) = 'Welcome UserName!']")

goodQuery = driver.find_element(By.XPATH, "//span[normalize-space(.) = 'Welcome UserName!']")

assert len(badQuery) == 0
assert len(badQuery2) == 0
print(goodQuery.text)
