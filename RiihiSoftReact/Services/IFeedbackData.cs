using RiihiSoftReact.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RiihiSoftReact.Services
{
    public interface IFeedbackData
    {
        IEnumerable<Feedback> GetAll();
        void Create(Feedback fb);
    }
}
