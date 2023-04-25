import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import {SequelizeModule} from "@nestjs/sequelize";
import { ServeStaticModule } from "@nestjs/serve-static";
import { RolesModule } from "./roles/roles.module";
import { FilesModule } from "./files/files.module";
import { AuthModule } from "./auth/auth.module";
import { Post } from "./posts/posts model";
import { Role } from "./roles/roles.model";
import { UserRoles } from "./roles/user-roles.model";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";
import * as path from 'path'
import { PostsModule } from "./posts/posts.module";
import { BasketModule } from "./basket/basket.module";
import { ProductModule } from "./product/product.module";

@Module({
    controllers:[],
    providers: [],
    imports: [
      ConfigModule.forRoot({
       envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      ServeStaticModule.forRoot({
        rootPath: path.resolve(__dirname, 'static'),
      }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRES_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DB,
          models: [User, Role, UserRoles, Post],
          autoLoadModels: true,
          
        }),
        UsersModule,
        RolesModule,
        AuthModule,
        PostsModule,
        FilesModule,
        BasketModule,
        ProductModule,
    ],
})
export class AppModule {}