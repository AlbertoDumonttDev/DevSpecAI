package com.albertodumonttdev.devspecai.utils;

public class ResponseFormatter {

    /**
     * Formats the response text by replacing literal "\\n" with actual newline characters.
     *
     * @param responseText The response text from the API containing literal \\n sequences
     * @return A formatted string with real newline characters
     */
    public static String formatTextWithNewlines(String responseText) {
        if (responseText == null) {
            return "";
        }
        return responseText.replace("\\n", "\n");
    }
}