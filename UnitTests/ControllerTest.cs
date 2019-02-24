using RiihiSoftReact.Controllers;
using System.Collections.Generic;
using Xunit;

namespace UnitTests
{
    public class ControllerTest
    {
        [Fact]
        public void JsonCountIsCorrect()
        {
            var feedbackData = new InMemoryFeedbackData();
            var ctrl = new FeedbackController(feedbackData);
            var getAll = ctrl.GetAllFeedback();

            if (getAll is Microsoft.AspNetCore.Mvc.JsonResult json)
            {
                var list = json.Value as List<RiihiSoftReact.Models.Feedback>;
                Assert.NotNull(list);
                Assert.Equal(list.Count, feedbackData.Feedbacks.Count);
            }
            else
                Assert.True(false);
        }
    }
}
