using Microsoft.AspNetCore.Mvc;
using Microsoft.CognitiveServices.Speech.Audio;
using Microsoft.CognitiveServices.Speech;
using TextoPraFalaTeste.Repositories;

namespace TextoPraFalaTeste.Controllers
{
    public class TalkingController : Controller
    {

    
        private readonly Talk _talkText;
        private readonly SpeechToTextRepository _speechToTextRepository;

        public TalkingController(IWebHostEnvironment webHostEnvironment)
        {
            _talkText = new Talk(webHostEnvironment);
        }

        [HttpPost("TextoParaFala")]
        public async Task<IActionResult>  FalarTexto(string textToTalk, string voiceAgentName)
        {
            try
            {
                var result = await _talkText.SpeechText(textToTalk, voiceAgentName);


                return Ok(result);
            }
            catch (Exception exc)
            {
                return BadRequest("Houve um erro: " + exc.Message);
            }
        }



    }
}
