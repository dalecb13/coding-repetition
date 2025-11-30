# Spaced Repetition for VS Code

Studying for interviews requires deep knowledge about a lot of the essentials. Data structures, algorithms, internals to programming languages, the topics are endless. In addition, interview questions sometimes test you on content not really related to day-to-day job duties. As a result, you end up spending time and money that could have been spent doing something productive instead of spending your valuable time studying for interviews.

This VS Code plugin is designed to help you maintain knowledge about the fundamentals of computer science while also helping you prepare for technical interview questions in preparation for jobs at tech companies.

Previously I used the [Spaced Repetition Plugin - GitHub](https://github.com/st3v3nmw/obsidian-spaced-repetition) in [Obsidian](https://obsidian.md/) personal knowledge management, but I got tired of writing code that is not an IDE. Additionally, certain coding questions asked in an interview do not require coding at all. Lastly, while at work, engineers are rarely told to "tell me about a time where you...". Consequently, most spaced repetition apps and plugins do not handle both types of questions well. The ideal app would have native support for all three types of questions (core knowledge, coding, and behavioral) without having to write any code at all. This plugin is designed to handle all three types of questions.

## How to Use This Plugin

This plugin is designed to use spaced repetition to help you learn and retain information faster than if you were to study it by rote memorization of the material. Once you've installed this plugin, simply open VS Code in an empty folder, create a directory called `/flashcards`, and add `.md` files that represent the flashcards on which you want to test yourself.

When you provide feedback on how well you remembered the answer for the flashcard, the plugin will automatically store that feedback in that flashcard so that it can determine when to show you that flashcard again.
