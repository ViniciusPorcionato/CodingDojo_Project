using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TextoPraFalaTeste.Entities;
using TextoPraFalaTeste.Repositories;

namespace TextoPraFalaTeste.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpeechToTextController : ControllerBase
    {

        private readonly SpeechToText _speechToText;
        private readonly IWebHostEnvironment _hostEnvironment; // Variável que guardará o caminho do projeto
        public SpeechToTextController(IWebHostEnvironment webHostEnvironment)
        {
            _hostEnvironment = webHostEnvironment;
            _speechToText = new SpeechToText();
        }

        [HttpPost("FalaParaTexto")]
        public async Task<IActionResult> Post(IFormFile file)
        {
            try
            {
                var result = new FileUploadResult();

                var path = Path.Combine(Directory.GetCurrentDirectory(), "audio", file.FileName);
                var stream = new FileStream(path, FileMode.Create);
                file.CopyToAsync(stream);
                result = (new FileUploadResult() { Name = file.FileName, Length = file.Length });

                //var audio = new FileUploadResult();

                if (result.Name != null)
                {
                    string formatedAudioPath = Path.Combine($"{_hostEnvironment.ContentRootPath}\\audio", result.Name);

                    var textoFalado = await _speechToText.FalaParaTexto(formatedAudioPath);

                    return Ok(textoFalado);
                }
                else
                {
                    return BadRequest("Audio não encontrado");
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
