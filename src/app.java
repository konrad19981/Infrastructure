import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import java.io.FileInputStream;
import java.io.IOException;

public class app {

    public static void main(String[] args) throws IOException {
        FileInputStream serviceAccount = new FileInputStream("infrastructure-394913-firebase-adminsdk-gfw7e-71cd59952d.json");

        FirebaseOptions options = new FirebaseOptions.Builder()
                .setCredentials(GoogleCredentials.fromStream(serviceAccount))
                .build();

        FirebaseApp.initializeApp(options);

        // Reszta kodu
    }
}