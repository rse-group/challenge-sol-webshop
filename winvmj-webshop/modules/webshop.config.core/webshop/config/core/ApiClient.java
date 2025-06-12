package webshop.config.core;

import java.io.IOException;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import webshop.config.core.PropertiesReader;

public class ApiClient {
    private static final String PROPERTIES_FILE = "rajaongkir.properties";
    private final String BASE_URL;
    private final String API_KEY;
    private final String CONTENT_TYPE;
    private final String ACCEPT;
    private final String STORE_ORDER_ENDPOINT;
    private final String SEARCH_DESTINATION_ENDPOINT;
    private final String CALCULATE_ENDPOINT;

    public ApiClient() {
        this.BASE_URL = PropertiesReader.getProp(PROPERTIES_FILE, "base_url");
        this.API_KEY = PropertiesReader.getProp(PROPERTIES_FILE, "authorization");
        this.CONTENT_TYPE = PropertiesReader.getProp(PROPERTIES_FILE, "content_type");
        this.ACCEPT = PropertiesReader.getProp(PROPERTIES_FILE, "accept");
        this.STORE_ORDER_ENDPOINT = PropertiesReader.getProp(PROPERTIES_FILE, "StoreOrder");
        this.SEARCH_DESTINATION_ENDPOINT = PropertiesReader.getProp(PROPERTIES_FILE, "SearchDestination");
        this.CALCULATE_ENDPOINT = PropertiesReader.getProp(PROPERTIES_FILE, "Calculate");
    }

    public String getApiResponse(String endpoint) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(BASE_URL + endpoint))
                .header("x-api-key", API_KEY)
                .header("Content-Type", CONTENT_TYPE)
                .header("Accept", ACCEPT)
                .GET()
                .build();

        String response = client.send(request, HttpResponse.BodyHandlers.ofString()).body();
        return response;
    }

    public String postApiResponse(String endpoint, String jsonBody) throws IOException, InterruptedException {
        System.out.println("postApiResponse jsonBody: " + jsonBody);
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(BASE_URL + endpoint))
                .header("x-api-key", API_KEY)
                .header("Content-Type", CONTENT_TYPE)
                .header("Accept", ACCEPT)
                .POST(HttpRequest.BodyPublishers.ofString(jsonBody))
                .build();

        String response = client.send(request, HttpResponse.BodyHandlers.ofString()).body();
        return response;
    }

    public String getDestinationEndpoint(String keyword) {
        return SEARCH_DESTINATION_ENDPOINT.replace("[keyword]", keyword);
    }    
    
    public String searchDestination(String keyword) throws IOException, InterruptedException {
        String endpoint = getDestinationEndpoint(keyword);
        System.out.println("Calling RajaOngkir API: " + BASE_URL + endpoint);
        return getApiResponse(endpoint);
    }

    public String getCalculateEndpoint(int destinationId, int weight, int amount) {
        return CALCULATE_ENDPOINT.replace("[destinationId]", String.valueOf(destinationId)).replace("[weight]", String.valueOf(weight)).replace("[amount]", String.valueOf(amount));
    }
    
    public String calculateCost(int destinationId, int weight, int amount) throws IOException, InterruptedException {
        String endpoint = getCalculateEndpoint(destinationId, weight, amount);
        System.out.println("Calling RajaOngkir API: " + BASE_URL + getCalculateEndpoint(destinationId, weight, amount));
        return getApiResponse(endpoint);
    }

    public String storeOrder(String jsonOrderData) throws IOException, InterruptedException {
        System.out.println("Calling API to store order: " + BASE_URL + STORE_ORDER_ENDPOINT + "with json " + jsonOrderData);
        return postApiResponse(STORE_ORDER_ENDPOINT, jsonOrderData);
    }
}