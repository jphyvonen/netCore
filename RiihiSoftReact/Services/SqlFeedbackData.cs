using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RiihiSoftReact.Data;
using RiihiSoftReact.Models;

namespace RiihiSoftReact.Services
{
    public class SqlFeedbackData : IFeedbackData
    {
        private FeedbackDbContext _context;

        public SqlFeedbackData(FeedbackDbContext context)
        {
            _context = context;
        }
        public void Create(Feedback fb)
        {
            _context.Feedbacks.Add(fb);
            _context.SaveChanges();
        }

        public IEnumerable<Feedback> GetAll()
        {
            return _context.Feedbacks;
        }
    }
}
