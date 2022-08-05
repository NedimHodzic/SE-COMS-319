import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class ValidationTests {

    static WebDriver driver;
    static String pathChromeDriver="chromedriver.exe";
    static String pathFile="file:///C:/Users/Nedim/Desktop/HW4/task1/validation.html";

    @BeforeClass
    public static void openBrowser() {
		System.setProperty("webdriver.chrome.driver", pathChromeDriver);
		driver = new ChromeDriver() ;
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
    }

    @AfterClass
    public static void closeBrowser() {
		driver.quit();
    }

    @Test
    public void successTest() throws InterruptedException {
        driver.get(pathFile);
        driver.manage().window().maximize();

        driver.findElement(By.id("txtFirstName")).sendKeys("Bob");
        driver.findElement(By.id("txtLastName")).sendKeys("Smith");
        driver.findElement(By.name("selectGender")).sendKeys("Male");
        driver.findElement(By.name("selectState")).sendKeys("Iowa");
        driver.findElement(By.id("txtEmail")).sendKeys("bobsmith@gmail.com");
        driver.findElement(By.id("txtPhone")).sendKeys("5151111111");
        driver.findElement(By.id("txtAddress")).sendKeys("Ames,IA");
        driver.findElement(By.id("btnValidate")).click();

        String message = driver.findElement(By.id("FinalResult")).getText();
        assertEquals(message, "OK");

        Thread.sleep(3000);
    }

    @Test
    public void failedTest() throws InterruptedException {
        driver.get(pathFile);
        driver.manage().window().maximize();

        driver.findElement(By.id("txtFirstName")).sendKeys("Bob");
        driver.findElement(By.id("txtLastName")).sendKeys("Smith");
        driver.findElement(By.name("selectGender")).sendKeys("Male");
        driver.findElement(By.name("selectState")).sendKeys("Iowa");
        driver.findElement(By.id("txtEmail")).sendKeys("bobsmith@gmail.com");
        driver.findElement(By.id("txtPhone")).sendKeys("515AAA1111");
        driver.findElement(By.id("txtAddress")).sendKeys("Ames,IA");
        driver.findElement(By.id("btnValidate")).click();

        String message = driver.findElement(By.id("FinalResult")).getText();
        assertEquals(message, "Error");

        Thread.sleep(3000);
    }
}
