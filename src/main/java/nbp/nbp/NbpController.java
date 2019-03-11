package nbp.nbp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class NbpController {

    @GetMapping("/exchangerates/{currencyCode}/today")
    public CurrencyModel index(@PathVariable String currencyCode) { //  Automagiczne to o ktoś poda w URLu zostanie zamienione na tą zmienną
        RestTemplate restTemplate = new RestTemplate();
        CurrencyModel currencyModel = restTemplate.getForObject("http://api.nbp.pl/api/exchangerates/rates/c/"
                + currencyCode + "/today/?format=json", CurrencyModel.class);
        return currencyModel;
    }
}
