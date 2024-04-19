using Microsoft.CognitiveServices.Speech;
using Microsoft.CognitiveServices.Speech.Audio;

namespace TextoPraFalaTeste.Repositories
{
    public class SpeechToTextRepository
    {

        private readonly string speechKey = "d894f46895f749d5b79c9b185b586098";
        private readonly string speechRegion = "eastus";

        public async Task<string> ConvertSpeechToText(string audioFile)
        {

            var speechConfig = SpeechConfig.FromSubscription(speechKey, speechRegion);
            speechConfig.SpeechRecognitionLanguage = "en-US";

            using var audioConfig = AudioConfig.FromWavFileInput(audioFile);
            using var speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);

            Console.WriteLine("Speak into your microphone.");
            var speechRecognitionResult = await speechRecognizer.RecognizeOnceAsync();
            //OutputSpeechRecognitionResult(speechRecognitionResult);

            return speechRecognitionResult.Text;
        }
    }
}
