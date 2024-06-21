package org.mysite.board.exception;

public class BoardNotFoundException extends RuntimeException {
    private static final Long serialVersionUID = 1L;

    public BoardNotFoundException(Long bno) { super ("id에 맞는 유저가 없습니다." + bno);}
}
