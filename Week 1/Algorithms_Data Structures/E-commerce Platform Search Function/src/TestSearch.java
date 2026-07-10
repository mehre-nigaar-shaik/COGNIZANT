import java.util.Arrays;
import java.util.Comparator;

public class TestSearch {

    public static void main(String[] args) {

        // Create an array of products
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Shoes", "Footwear"),
            new Product(103, "Mobile", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Camera", "Electronics")
        };

        // -------- Linear Search --------
        System.out.println("=== Linear Search ===");

        Product linearResult = SearchAlgorithms.linearSearch(products, "Mobile");

        if (linearResult != null) {
            System.out.println("Product Found:");
            System.out.println("ID: " + linearResult.getProductId());
            System.out.println("Name: " + linearResult.getProductName());
            System.out.println("Category: " + linearResult.getCategory());
        } else {
            System.out.println("Product not found.");
        }

        // -------- Binary Search --------
        Arrays.sort(products, Comparator.comparing(Product::getProductName));

        System.out.println("\n=== Binary Search ===");

        Product binaryResult = SearchAlgorithms.binarySearch(products, "Mobile");

        if (binaryResult != null) {
            System.out.println("Product Found:");
            System.out.println("ID: " + binaryResult.getProductId());
            System.out.println("Name: " + binaryResult.getProductName());
            System.out.println("Category: " + binaryResult.getCategory());
        } else {
            System.out.println("Product not found.");
        }
    }
}