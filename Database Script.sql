create table Users(
UserID int AUTO_INCREMENT,
UserName varchar(200),
LoginName varchar(200),
Password varchar(200),
UserRight varchar(200),
Email varchar(200),
Avatar varchar(200) null,
BackgroundImg varchar(200) null,
RegisterDate date null,
CreatedBy varchar(200) null,
UpdatedBy varchar(200) null,
UpdatedDate date null,
primary key(UserID)
);


create table Answers(
AnswerID int auto_increment,
UserID int,
QuestionID int,
AContent varchar(1000),
PostedDate date null,
EditedDate date null,
isDeleted bool null,
DeletedDate date null,
primary key(AnswerID)
);


create table Badges(
BadgeID int auto_increment,
BadgeName varchar(100),
Description varchar(1000) null,
primary key(BadgeID)
);

create table Comments(
CommentID int auto_increment,
UserID int,
AnswerID int,
CContent varchar(10000),
PostedDate date null,
EditedDate date null,
isDeleted bool null,
DeletedDate date null,
primary key(CommentID)
);


create table Flags(
FlagID int auto_increment,
UserID int,
QuestionID int null,
AnswerID int null,
CommentID int null,
FlagName varchar(100) null,
FlagDate date null,
isDeleted bool null,
DeletedDate date null,
primary key(FlagID)
);

create table PostLikes(
postLikeID int auto_increment,
UserID int,
QuestionID int null,
AnswerID int null,
CommentID int null,
PostLikeDate date null,
isDeleted bool null,
DeletedDate date null,
primary key(postLikeID)
);

create table Questions(
QuestionID int auto_increment,
UserID int,
Title varchar(1000),
TagName varchar(100),
Image varchar(10000) null,
QContent varchar(1000),
PostedDate date null,
EditedDate date null,
isDeleted bool null,
DeletedDate date null,
primary key(QuestionID)
);

create table Tags(
TagID int auto_increment,
UserID int,
TagName varchar(100),
QuestionID int,
primary key(TagID)
);

select * from Questions;









