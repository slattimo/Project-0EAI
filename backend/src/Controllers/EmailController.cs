using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmailAI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpGet("{userId}")]
        public async Task<ActionResult<IEnumerable<Email>>> GetEmails(string userId)
        {
            var emails = await _emailService.GetEmailsAsync(userId);
            return Ok(emails);
        }

        [HttpPost]
        public async Task<ActionResult<Email>> ComposeEmail([FromBody] Email email)
        {
            var createdEmail = await _emailService.ComposeEmailAsync(email);
            return CreatedAtAction(nameof(GetEmails), new { userId = email.UserId }, createdEmail);
        }

        [HttpPost("summarize")]
        public async Task<ActionResult<string>> SummarizeEmailThread([FromBody] EmailThreadRequest request)
        {
            var summary = await _emailService.SummarizeEmailThreadAsync(request.ThreadId);
            return Ok(summary);
        }
    }

    public interface IEmailService
    {
        Task<IEnumerable<Email>> GetEmailsAsync(string userId);
        Task<Email> ComposeEmailAsync(Email email);
        Task<string> SummarizeEmailThreadAsync(string threadId);
    }

    public class Email
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string Subject { get; set; }
        public string Body { get; set; }
        public string Sender { get; set; }
        public List<string> Recipients { get; set; }
        public DateTime Date { get; set; }
        public string ThreadId { get; set; }
    }

    public class EmailThreadRequest
    {
        public string ThreadId { get; set; }
    }
}