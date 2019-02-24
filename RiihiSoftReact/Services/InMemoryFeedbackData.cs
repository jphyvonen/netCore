using RiihiSoftReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RiihiSoftReact.Controllers
{
    public class InMemoryFeedbackData : Services.IFeedbackData
    {
        public InMemoryFeedbackData()
        {

        }
        public List<Feedback> Feedbacks { get; set; } = new List<Feedback> {
            new Feedback {Id = 1, Email = "jeejee@jee.fi", Name = "Seppo", Freetext = "Kyllä tää on hyvä hyvähyvä hyvä phyvähyvähyvä assasd dfgcvffffffd asdsdsdsj"},
            new Feedback {Id = 2, Email = "Kalle@kallela.com", Name = "Kalle", Freetext= "Erittäin hyvä!"},
            new Feedback {Id = 3,  Email = "jeejee@jee.fi", Name = "Seppo", Freetext= "Kyllä tää on hyvä"},
            new Feedback {Id = 4, Email = "Kalle@kallela.com", Name = "Kalle", Freetext= "Erittäin hyvä!"},
            new Feedback {Id = 5, Email = "Kalle@kallela.com", Name = "Kalle", Freetext= "Erittäin hyvä!"},
            new Feedback {Id = 6, Email = "Kalle@kallela.com", Name = "Kalle", Freetext= "Erittäin hyvä!a 12szss ssddsfsfsfd fdf ffd d dfdfdfdfdfdfdfdfd ddd ddd ddd"},
            new Feedback {Id = 7,  Email = "jeejee@jee.fi", Name = "Seppo", Freetext= "Kyllä tää on hyvä"},
            new Feedback {Id = 8,  Email = "jeejee@jee.fi", Name = "Seppo", Freetext= "Kyllä tää on hyvä"},
            new Feedback {Id = 9,  Email = "jeejee@jee.fi", Name = "Seppo", Freetext= "Kyllä tää on hyvä"},
            new Feedback {Id = 10, Email = "Kalle@kallela.com", Name = "Kalle", Freetext= "Erittäin hyvä!"},
            new Feedback {Id = 11, Email = "Kalle@kallela.com", Name = "Kalle", Freetext= "Erittäin hyvä!"},
            new Feedback {Id = 12, Email = "Kalle@kallela.com", Name = "Kalle", Freetext= "Erittäin hyvä!"}

        };

        public void Create(Feedback fb)
        {
            Feedbacks.Add(fb);
        }

        public IEnumerable<Feedback> GetAll()
        {
            return Feedbacks;
        }
    }
}
