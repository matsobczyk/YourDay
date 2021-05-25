**Wymagana dokumentacja
dla projektów realizowanych w ramach zajęć
Inżynierii oprogramowania
w semestrze letnim roku akademickiego 2020/20201**

1. Charakterystyka oprogramowania
    1. Nazwa skrócona.
        YourDay
    2. Nazwa pełna.
        YourDay, personal manager.
    3. Krótki opis ze wskazaniem celów.
        Aplikacja webowa, która jest narzędziem usprawniającym i poprawiającym produktywność w przedsiębiorstwie, kładące duży nacisk na prywatność danych użytkowników.
2. Prawa autorskie
    1. Autorzy:
        - Przemysław Stachurski
        - Mateusz Sobczyk
        - Filip Szczepański
    2. Warunki licencyjne do oprogramowania wytworzonego przez grupę:
        Oprogramowanie będzie open-source'owe, udostępnione na licencji MIT.
3. Specyfikacja wymagań
### Wymagania funkcjonalne



|| Nazwa krótka | Opis | P |
| --- | --- | --- | --- |
| 1 | Generowanie kodu rejestracji | Umożliwienie adminowi utworzenia kodu za pomocą którego użytkownik będzie mógł się zarejestrować. | 1 |
| 2 | Rejestracja | Umożliwienie użytkownikowi utworzenia konta za pomocą email oraz hasła. | 2 |
| 3 | Logowanie | Umożliwienie użytkownikowi zalogowania się do istniejącego już konta za pomocą email oraz hasła. | 3 |
| 4 | Wylogowanie | Umożliwienie użytkownikowi wylogowania się ze swojego konta | 3 |
| 5 | Lista zadań | Dodawanie, usuwanie oraz modyfikacja zadań użytkownika (CRUD). Zadania zawierają treść, datę oraz tworzącego. | 1 |
| 6 | Lista notatek | Dodawanie, usuwanie oraz modyfikacja notatek użytkownika (CRUD). Notatki zawierają tytuł, treść i tworzącego. | 2 |
| 7 | Lista wiadomości | Pobieranie najnowszych wiadomości za pomocą API zewnętrznego oraz wyświetlanie ich w aplikacjiWiadomość zawiera treść oraz date. | 2 |
| 8 | Prognoza pogody | Pobieranie danych pogodowych dla wybranego miasta za pomocą API zewnętrznego oraz wyświetlanie ich w aplikacji | 2 |
| 9 | Wyświetlenie daty oraz godziny | Pobieranie daty oraz godziny dla wybranego miasta i wyświetlenie ich w aplikacji. | 1 |
| 10 | Wyświetlenie cytatu na dany dzień | Pobieranie cytatu na dany dzień za pomocą API zewnętrznego oraz wyświetlenie go w aplikacji | 1 |

### Wymagania niefunkcjonalne.

|| Nazwa krótka | Opis | P |
| --- | --- | --- | --- |
| 1 | Łączność z bazą danych| Zapis danych użytkowników do internetowej bazy Mongo.db | 3 |
| 2 | Szyfrowanie danych przychodzących| Hashowanie danych przychodzących z formularzy rejestracji i logowania. | 1 |
| 3 | Szyfrowanie danych wychodzących. | Bezpieczne połączenie między serwerem a klientem. | 1 |
| 4 | Weryfikacja kodów dostępu przy rejestracji.| Wykorzystujemy system generowania kodów dostępu, w celu weryfikacji użytkownika, który chce się zarejestrować, aby zapobiec masowemu zakładaniu kont przez boty. | 2 |
| 5 | Weryfikacja kont użytkowników za pomocą generowania kodów dostępu.| Wykorzystujemy system generowania kodów dostępu, kody dostępu generują się przy logowaniu i pozwalają na dostęp do pozostałych funkcjonalności związanych z bazą danych. | 2 |
| 6 | Potwierdzenie rejestracji drogą mailową | W momencie założenia konta użytkownik otrzymuje wiadomość drogą mailowa która potwierdza skuteczność procesu zakładania konta | 1 |
| 7 | Zapisywanie danych z API na serwerze | W celu ograniczenia wysyłanych zapytań do zewnętrznych API serwer jako jedyny będzie wysyłał zapytania, następnie gromadził je w bazie danych i dopiero rozprowadzał do użytkowników | 2 |


1. Projekt (język UML) - odpowiedzialność: programista
  1. Diagram przypadków użycia
  2. Diagram czynności dla każdego przypadku użycia
  3. Diagram komponentów
  4. Diagram wdrożenia
2. Architektura systemu/oprogramowania - odpowiedzialność: programista
  1. Architektura rozwoju - stos technologiczny:
        - Back End: Node.js, MongoDB
        - Front End: Vue.js
        - Api: pogoda - "Openweathermap", cytaty - "Goquotes herokuapp", artykuły - "News Api". 

  2. Architektura uruchomieniowa - stos technologiczny.
3. Testy - odpowiedzialność: kontrola jakości.
  1. Scenariusze testów.
  2. Sprawozdanie z wykonania scenariuszy testów.
