package Kontroller;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;

import java.io.IOException;
import java.io.InputStream;

public class FirebaseInitializer {

    public static void initialize() throws IOException {
        // Wczytaj plik JSON zasobu
        InputStream serviceAccount = FirebaseInitializer.class.getResourceAsStream("infrastructure-394913-firebase-adminsdk-gfw7e-71cd59952d.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();

        FirebaseApp.initializeApp(options);
    }
}
