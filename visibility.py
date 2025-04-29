from selenium.webdriver.common.by import By
from utils import get_driver

driver = get_driver()
driver.get("http://uitestingplayground.com/visibility")

BUTTON_IDS = ["removedButton", "zeroWidthButton", "overlappedButton", "transparentButton", "invisibleButton", "notdisplayedButton", "offscreenButton"]

hide = driver.find_element(By.ID, "hideButton")

for button in BUTTON_IDS:
    assert driver.find_element(By.ID, button).is_displayed(), f"{button} should be displayed"

print("Toate butoanele sunt afisate")

hide.click()

print("Apasat hideButton")

# metoda is_displayed() detecteaza majoritatea cazurilor in care un element este ascuns, dar nu overlappedButton

for button in BUTTON_IDS:
    element = driver.find_elements(By.ID, button)
    assert len(element) == 0 or len(element) == 1
    if len(element) == 0:
        print(f"{button} este sters")
    else:
        print(f"{button}.is_displayed() = {element[0].is_displayed()}")

driver.quit()
