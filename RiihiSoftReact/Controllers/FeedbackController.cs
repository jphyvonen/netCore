using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RiihiSoftReact.Models;
using RiihiSoftReact.Services;

namespace RiihiSoftReact.Controllers
{
    [Route("api/[controller]")]
    public class FeedbackController : Controller
    {
        private IFeedbackData _feedbackData;

        public FeedbackController(IFeedbackData feedbackData)
        {
            _feedbackData = feedbackData;
        }
        [HttpGet("[action]")]
        public IActionResult GetAllFeedback()
        {
            return Json(_feedbackData.GetAll());
        }
        [HttpPost("[action]")]
        public void PostFeedback([FromBody] Feedback fb)
        {
            _feedbackData.Create(fb);
        }

    }
}
