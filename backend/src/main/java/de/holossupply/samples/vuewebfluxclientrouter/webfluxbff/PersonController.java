package de.holossupply.samples.vuewebfluxclientrouter.webfluxbff;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/person")
public class PersonController {

    @GetMapping("/")
    public List<Person> list() {
        return Arrays.asList(
            new Person(1,"Karli"),
            new Person(2,"Anna"),
            new Person(3,"Ken"),
            new Person(4,"Naomi"),
            new Person(5,"Phillip")
        );
    }

    public record Person(Integer id, String name) { }
}
