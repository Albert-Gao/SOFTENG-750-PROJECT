import { Application } from '../declarations'
import users from './users/users.service'
import news from './news/news.service'
import comments from './comments/comments.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
    app.configure(users)
    app.configure(news)
    app.configure(comments);
}
