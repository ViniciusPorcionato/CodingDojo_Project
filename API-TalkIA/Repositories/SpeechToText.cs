using Microsoft.CognitiveServices.Speech.Audio;
using Microsoft.CognitiveServices.Speech;

namespace TextoPraFalaTeste.Repositories
{
    public class SpeechToText
    {
        private readonly string speechKey = "c8ba6f026ada4937b0c22c7af8963c57";
        private readonly string speechRegion = "eastus";

        public async Task OutputSpeechRecognitionResult(SpeechRecognitionResult speechRecognitionResult)
        {
            switch (speechRecognitionResult.Reason)
            {
                case ResultReason.RecognizedSpeech:
                    Console.WriteLine($"RECOGNIZED: Text={speechRecognitionResult.Text}");
                    break;
                case ResultReason.NoMatch:
                    Console.WriteLine($"NOMATCH: Speech could not be recognized.");
                    break;
                case ResultReason.Canceled:
                    var cancellation = CancellationDetails.FromResult(speechRecognitionResult);
                    Console.WriteLine($"CANCELED: Reason={cancellation.Reason}");

                    if (cancellation.Reason == CancellationReason.Error)
                    {
                        Console.WriteLine($"CANCELED: ErrorCode={cancellation.ErrorCode}");
                        Console.WriteLine($"CANCELED: ErrorDetails={cancellation.ErrorDetails}");
                        Console.WriteLine($"CANCELED: Did you set the speech resource key and region values?");
                    }
                    break;
            }
        }

        public async Task<string> FalaParaTexto(string fileName)
        {
            var speechConfig = SpeechConfig.FromSubscription(speechKey, speechRegion);
            speechConfig.SpeechRecognitionLanguage = "pt-BR";

            using var audioConfig = AudioConfig.FromWavFileInput(fileName);
            using var speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);

            var speechRecognitionResult = await speechRecognizer.RecognizeOnceAsync();
            OutputSpeechRecognitionResult(speechRecognitionResult);

            return speechRecognitionResult.Text;
        }
    }
}
