package errs

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"path/filepath"
)

type ErrorMessages map[string]map[string]string

var errorMessages ErrorMessages

func init() {
	err := loadErrorMessages()
	if err != nil {
		log.Fatalf("Error loading error messages: %v", err)
	}
}

func loadErrorMessages() error {
	filePath, err := filepath.Abs("errs/errors.json")
	if err != nil {
		return err
	}

	fileContent, err := os.ReadFile(filePath)
	if err != nil {
		return err
	}

	var errorMessagesJSON map[string]map[string]string
	if err := json.Unmarshal(fileContent, &errorMessagesJSON); err != nil {
		return err
	}

	errorMessages = make(ErrorMessages)
	for k, v := range errorMessagesJSON {
		errorMessages[k] = v
	}

	fmt.Println(errorMessages)

	return nil
}

func GetErrorMessage(language string, errorCode string) string {
	log.Printf("Buscando mensagem de erro para idioma %s e código de erro %s", language, errorCode)

	if languageMessages, ok := errorMessages[language]; ok {
		log.Printf("Mensagens disponíveis para o idioma %s: %v", language, languageMessages)

		if message, ok := languageMessages[errorCode]; ok {
			log.Printf("Mensagem encontrada para o código de erro %s: %s", errorCode, message)
			return message
		}
	}

	log.Printf("Mensagem de erro não encontrada para o idioma %s e código de erro %s", language, errorCode)
	return "An error occurred."
}
